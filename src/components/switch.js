import React from 'react'

const Switch = ({ label, initialState = false, handleClick, children }) => {
  const [isChecked, setIsChecked] = React.useState(initialState)

  const handleChecked = () => {
    setIsChecked((c) => !c)
    handleClick()
  }
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleChecked} checked={isChecked} />
        <span className="slider round"></span>
      </label>
      {label && <span className="label">{label}</span>}
      <style jsx>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--light-shade);
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          .slider:before {
            position: absolute;
            content: '';
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: var(--light-tint);
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          input:checked + .slider {
            background-color: var(--amplify-primary-color);
          }

          input:focus + .slider {
            box-shadow: 0 0 1px var(--amplify-primary-color);
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }

          .slider.round {
            border-radius: 34px;
          }

          .slider.round:before {
            border-radius: 50%;
          }
          .label {
            text-transform: uppercase;
            color: var(--light-tint);
            margin-left: 10px;
          }
        `}
      </style>
    </>
  )
}

export default Switch
