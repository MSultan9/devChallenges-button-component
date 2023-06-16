import Icon from '@mui/material/Icon';

type Props = {
    variant?: 'outline' | 'text',
    disableShadow?: boolean,
    disabled?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: 'sm' | 'md' | 'lg',
    color?: 'default' | 'primary' | 'secondary' | 'danger',
}

type RestProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>;

const Button = (props: Props & RestProps) => {

    const { variant, disableShadow, disabled, startIcon, endIcon, size, color, ...rest } = props

    const getBackground = (color: 'primary' | 'secondary' | 'danger') => {
        if (color === 'primary')
            return `bg-custom-primary hover:bg-custom-primary-dark focus:bg-custom-primary-dark`
        else if (color === 'secondary')
            return `bg-custom-secondary hover:bg-custom-secondary-dark focus:bg-custom-secondary-dark`
        return `bg-custom-danger hover:bg-custom-danger-dark focus:bg-custom-danger-dark`

    }

    const getText = () => {
        if (disabled)
            return 'Disabled'
        else if (color === 'secondary')
            return 'Secondary'
        else if (color === 'danger')
            return 'Danger'
        return 'Default'
    }

    const defaultClasses = 'text-sm rounded-md transition font-medium flex items-center'

    let border = ''
    let textColor = ''
    let bgColor = ''
    let shadow = ''
    let padding = 'px-4 py-2'
    //BORDER
    if (variant === 'outline' && !disabled)
        border = 'border border-custom-primary'
    //COLOR
    if (disabled)
        textColor = 'text-custom-gray-300'
    else if (variant)
        textColor = 'text-custom-primary'
    else
        textColor = (color && color !== 'default') ? 'text-white' : 'text-custom-gray-500'
    //BACKGROUND
    if (disabled) {
        if (variant !== 'text')
            bgColor = 'bg-custom-gray-400'
    } else if (variant)
        bgColor = 'hover:bg-custom-primary-light focus:bg-custom-primary-light'
    else
        bgColor = (color && color !== 'default')
            ? getBackground(color)
            : 'bg-custom-gray-400 hover:bg-custom-gray-600 focus:bg-custom-gray-600'
    //SHADOW
    if (!variant && !disableShadow && !disabled)
        shadow = 'shadow-3xl'
    //PADDING
    if (size === 'sm')
        padding = 'py-1.5 px-3'
    else if (size === 'lg')
        padding = 'py-2.5 px-5'

    const classes = `${border} ${textColor} ${bgColor} ${shadow} ${padding}`

    return (
        <button
            className={`${defaultClasses} ${classes}`}
            disabled={disabled}
            {...rest}
        >
            {startIcon &&
                <Icon fontSize="inherit" className='mr-2.5'>{startIcon}</Icon>
            }
            {getText()}
            {endIcon &&
                <Icon fontSize="inherit" className='ml-2.5'>{endIcon}</Icon>
            }
        </button>
    )
}

export default Button