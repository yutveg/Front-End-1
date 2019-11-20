import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../redux/user/user.action";

function PokeList(props) {
  console.log("PokeList", props);
  return (
    <>
      <button onClick={() => props.dispatch(fetchPokemon())}>Get Data</button>
      {props.isFetching && <div>⏰</div>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.pokemon.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}
          </li>
        ))}
      </ul>
    </>
  );
}

const mapDispatchToProps = {
  // Action Creators go here!
  fetchPokemon
};

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;
  // return { isFetching: state.isFetching, pokemon: state.pokemon };
})(PokeList);
