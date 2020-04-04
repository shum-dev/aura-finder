import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RecursiveProperty from '../components/recursive/RecursiveProperty';

import '../styles/RepoPage.css';

const RepoPage = () => {
  const { id } = useParams();
  const currentRepo = useSelector((state) => (
    state.repos.filter((item) => item.id.toString() === id)[0]
  ));

  return (
    <div className="RepoPage">
      <h1 className="RepoPage-headline">
        {currentRepo.name.toUpperCase()}
      </h1>
      <RecursiveProperty
        prop={currentRepo}
        propName="Root Property"
        rootProp
      />
    </div>
  );
};

export default RepoPage;
