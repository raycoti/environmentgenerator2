import { connect } from 'react-redux';
import React, { Component } from 'react';

const Level = (props) => {
  const {handleChange, handleSubmit, inputValue, warning, warning2} = props;
  return (
    <div className="col-md-6">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create Level</legend>
           { warning.length > 1 && <div className="alert alert-warning">{warning}</div> }
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={inputValue}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!!warning  || !warning2 || !inputValue}>
                Create Level
              </button>
            </div>
          </div>
        </fieldset>
</form>

    </div>
  )
}

export default Level;