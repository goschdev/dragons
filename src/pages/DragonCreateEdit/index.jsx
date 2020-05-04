import React, { useState, useEffect, useCallback } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { InputWithLabel } from 'components/InputWithLabel';

import { Link, Redirect, useParams } from 'react-router-dom';
import { ROUTES } from 'logic/constants';
import {
  createDragon,
  getDragonDetail,
  updateDragon,
} from 'logic/requests/dragon';
import { TEXTS } from 'logic/texts';
import {
  Container,
  Title,
  Form,
  InputsWrapper,
  ButtonsWrapper,
  SaveButton,
  CancelButton,
} from './styles';

export const DragonCreateEdit = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [history, setHistory] = useState('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (id) {
      await updateDragon({ id, name, type, history });
      setSuccess(true);
    } else {
      await createDragon({ name, type, history });
      setSuccess(true);
    }
  };

  const recovery = useCallback(async () => {
    setLoading(true);

    const {
      data: { name: localName, type: localType, history: localHistory },
    } = await getDragonDetail(id);

    setName(localName);
    setType(localType);
    setHistory(localHistory);

    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id) recovery();
  }, [id, recovery]);

  return (
    <Container>
      <Wrapper>
        <Title>
          {id ? TEXTS.createEdit.titleEdit : TEXTS.createEdit.titleCreate}
        </Title>
        <Form onSubmit={submit}>
          <InputsWrapper>
            <InputWithLabel
              id="dragon-name"
              label={TEXTS.createEdit.name}
              placeholder={TEXTS.createEdit.namePlaceholder}
              value={name}
              disabled={loading}
              onChange={({ target }) => setName(target.value)}
              required
            />
            <InputWithLabel
              id="dragon-type"
              label={TEXTS.createEdit.type}
              placeholder={TEXTS.createEdit.typePlaceholder}
              value={type}
              disabled={loading}
              onChange={({ target }) => setType(target.value)}
              required
            />
          </InputsWrapper>
          <InputWithLabel
            id="dragon-history"
            label={TEXTS.createEdit.history}
            placeholder={TEXTS.createEdit.historyPlaceholder}
            value={history}
            disabled={loading}
            onChange={({ target }) => setHistory(target.value)}
            isTextArea
          />
          <ButtonsWrapper>
            <SaveButton type="submit" disabled={loading}>
              {TEXTS.createEdit.save}
            </SaveButton>
            <CancelButton as={Link} to={ROUTES.MAIN}>
              {TEXTS.createEdit.cancel}
            </CancelButton>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
      {success && <Redirect to={ROUTES.MAIN} />}
    </Container>
  );
};

export default DragonCreateEdit;
