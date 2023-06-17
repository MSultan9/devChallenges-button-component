import Icon from '@mui/material/Icon';

type Props = {
    error?: boolean,
    disabled?: boolean,
    helperText?: string,
    value?: string,
    size?: 'sm' | 'md',
    fullWidth?: boolean,
    rows?: number,
    multiline?: boolean,
    startIcon?: string,
    endIcon?: string,
}

type RestProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;

const Input = ({ error, disabled, helperText, value, size, fullWidth, multiline, rows, startIcon, endIcon, ...rest }: Props & RestProps) => {
    let border = ''

    //BORDER
    if (disabled)
        border = 'border-custom-gray-400'
    else if (error)
        border = 'border-custom-danger focus-within:border-custom-danger hover:border-custom-gray-800'
    else
        border = 'border-custom-gray-700 focus-within:border-custom-primary hover:border-custom-gray-800'

    return (
        <>
            <label className={`${error ? 'text-custom-danger hover:text-custom-gray-800' : 'focus-within:text-custom-primary'} ${fullWidth ? 'block' : 'inline-block'}`}>
                <div className="text-xs mb-1">Label</div>
                <div className={`border ${border} rounded-lg overflow-hidden inline-flex w-full items-center ${startIcon ? 'pl-2.5' : ''} ${endIcon ? 'pr-2.5' : ''}`}>
                    {multiline ?
                        <textarea
                            rows={rows}
                            className={`${size === 'sm' ? 'px-2 py-2.5' : 'px-3 py-5'} rounded-lg outline-0 text-custom-gray-800`}
                            placeholder="Placeholder"
                            defaultValue={value}
                            disabled={disabled}
                        />
                        :
                        <>
                            {startIcon &&
                                <Icon fontSize='small'>{startIcon}</Icon>
                            }
                            <input
                                className={`${size === 'sm' ? 'px-2 py-2.5' : 'px-3 py-5'} rounded-lg outline-0 text-custom-gray-800`}
                                placeholder="Placeholder"
                                defaultValue={value}
                                disabled={disabled}
                                {...rest}
                            />
                            {endIcon &&
                                <Icon fontSize='small'>{endIcon}</Icon>
                            }
                        </>
                    }
                </div>
                {helperText &&
                    <div className={`text-xs mt-1 ${error ? 'text-custom-danger' : 'text-custom-gray-700'}`}>{helperText}</div>
                }
            </label>
        </>
    )
}

export default Input;