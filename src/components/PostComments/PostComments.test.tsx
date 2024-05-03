import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar comentários ao Post', () => {
        const {debug} = render(<PostComment/>);
        
        fireEvent.change(screen.getByTestId('comentario-content'), {
            target: {
                value: 'Que legal!',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));
        fireEvent.change(screen.getByTestId('comentario-content'), {
            target: {
                value: 'Adorei!',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentario'));
        debug()
        expect(screen.getAllByTestId('comentario')).toHaveLength(2);
    });
});