import { DetailsHeader } from "./components/DetailsHeader";
import * as S from "./styles";
import { RootStackParamList } from "../../routes/stack.routes";
import { DetailsContent } from "./components/DetailsContent";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import * as RestaurantsActions from "../../store/ducks/restaurants/actions";
import { connect } from "react-redux";
import { DetailsProps } from "./types";
import { useRoute } from "@react-navigation/native";
import defaultImage from "../../assets/defaultImage.png";

import { useLayoutEffect } from "react";
import { Restaurant } from "../../dtos/RestaurantDTO";

const Details = ({ navigation, selected, getOneRequest }: DetailsProps) => {
  const route = useRoute();
  const { id } = route.params as RootStackParamList["Details"];

  useLayoutEffect(() => {
    getOneRequest(id);
  }, []);

  return (
    <S.Container>
      <DetailsHeader
        handleGoBack={() => navigation.goBack()}
        url={selected?.image?.url as string}
      />

      <DetailsContent data={selected} />
    </S.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.restaurants.loading,
  selected: state.restaurants.selected as Restaurant,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RestaurantsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
