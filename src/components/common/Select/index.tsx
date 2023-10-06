import React, { FC } from 'react';
import style from './style.module.scss';
import Select from 'react-select';

type option = {
    value: string 
    label: string
}

type SelectProp = {
    title: string
    options: option[]
    selectValue: (value: string) => any
}

const SelectComp: FC<SelectProp> = ({ title, options, selectValue }) => {

    const changeOption = (option: any) => {
        selectValue(option.value); 
    };

    return (
        <div className={style.selectBlock}>
            <h3 className={style.title}>{title}</h3>
            <Select 
                className={style.select}
                defaultValue={options[0]}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                onChange={changeOption}
                options={options}
            />
        </div>
    );
};

export default SelectComp;
