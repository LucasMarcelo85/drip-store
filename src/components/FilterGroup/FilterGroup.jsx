import "./FilterGroup.css";

export function FilterGroup() {
    return (
        <aside>
            <div className="side">
                <div className="filtroprods">
                    <h3>Filtrar por</h3>

                    <hr />

                    <div className="markas">
                        <h3>Marka</h3>

                        <form>
                            <input
                                type="checkbox"
                                id="addidas"
                                value="ADDIDAS"
                            />
                            <label htmlFor="addidas">Addidas</label>

                            <input
                                type="checkbox"
                                id="calenciga"
                                value="CALENCIAGA"
                            />
                            <label htmlFor="calenciaga">Calenciaga</label>

                            <input
                                type="checkbox"
                                id="k-swiss"
                                value="K-SWISS"
                            />
                            <label htmlFor="k-swiss">K-Swiss</label>

                            <input type="checkbox" id="nike" value="NIKE" />
                            <label htmlFor="nike">Nike</label>

                            <input type="checkbox" id="puma" value="PUMA" />
                            <label htmlFor="puma">Puma</label>
                        </form>
                    </div>

                    <div className="catingoria">
                        <h3>Categoria</h3>

                        <form>
                            <input
                                type="checkbox"
                                id="esporte-e-lazer"
                                value="ESPORTES-E-LAZER"
                            />
                            <label htmlFor="esporte-e-lazer">
                                Esportes e lazer
                            </label>

                            <input type="checkbox" id="casual" value="CASUAL" />
                            <label htmlFor="casual">Casual</label>

                            <input
                                type="checkbox"
                                id="utilitario"
                                value="UTILITARIO"
                            />
                            <label htmlFor="utilitario">Utilitário</label>

                            <input
                                type="checkbox"
                                id="corrida"
                                value="CORRIDA"
                            />
                            <label htmlFor="corrida">Corrida</label>
                        </form>
                    </div>

                    <div className="gen">
                        <h3>Gênero</h3>

                        <form>
                            <input
                                type="checkbox"
                                id="masculino"
                                value="MASCULINO"
                            />
                            <label htmlFor="masculino">Masculino</label>

                            <input
                                type="checkbox"
                                id="feminino"
                                value="FEMININO"
                            />
                            <label htmlFor="feminino">Feminino</label>

                            <input type="checkbox" id="unisex" value="UNISEX" />
                            <label htmlFor="unisex">Unisex</label>
                        </form>
                    </div>

                    <div className="stado">
                        <h3>Estado</h3>

                        <form>
                            <input type="radio" id="novo" value="NOVO" />
                            <label htmlFor="novo">Novo</label>

                            <input type="radio" id="usado" value="USADO" />
                            <label htmlFor="usado">Usado</label>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}
