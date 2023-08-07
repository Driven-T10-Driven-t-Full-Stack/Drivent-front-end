import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const StyledTextField = styled(TextField)`
`;

export default function Input({
  type,
  name,
  label,
  mask,
  value,
  onChange,
  onFocus,
  placeholder,
  className,
  error,
  errorExpiry
}) {
  return (
    <>
      {mask ? ( 
        <InputMask
          type={type}
          name={name}
          mask={mask}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className={className} 
        >
          {(inputProps) => (
            <StyledTextField
              {...inputProps}
              label={label}
              variant="outlined"
              fullWidth
              placeholder={placeholder}
              error={((error && value === '')) ? true : ( (error || errorExpiry) && name === 'expiry') ? true : false}
              style={{ border: '1px solid #d5d5d5', borderRadius: '5px',  }}
            />
          )}
        </InputMask>
      ) : (
        <StyledTextField 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          label={label}
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          className={className} 
          error={ error && value === ''}
          style={{ marginBottom: '10px', border: '1px solid #d5d5d5', borderRadius: '5px' }}
        />
      )}
    </>
  );
};
