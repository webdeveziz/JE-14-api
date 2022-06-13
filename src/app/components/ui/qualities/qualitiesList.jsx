import React from "react";
// import Qualities from "../qualities";
import { useQuality } from "../../../hooks/useQualities";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQualitiesById } = useQuality();

    console.log("qualities, ", qualities);
    console.log("isLoading", isLoading);

    if (!isLoading) {
        return (
            <>
                {qualities.map((q) => {
                    console.log("q-id", getQualitiesById(q)._id);
                    console.log("q-name", getQualitiesById(q).name);
                    console.log("q-color", getQualitiesById(q).color);
                    return (
                        <Quality
                            key={getQualitiesById(q)._id}
                            color={getQualitiesById(q).color}
                            name={getQualitiesById(q).name}
                        />
                    );
                })}
            </>
        );
    } else {
        return "Loading ... :(";
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
