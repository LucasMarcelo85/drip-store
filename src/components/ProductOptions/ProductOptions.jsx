import "./ProductOptions.css";

export function ProductOptions() {
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
                            <label for="addidas">Addidas</label>

                            <input
                                type="checkbox"
                                id="calenciga"
                                value="CALENCIAGA"
                            />
                            <label for="calenciaga">Calenciaga</label>

                            <input
                                type="checkbox"
                                id="k-swiss"
                                value="K-SWISS"
                            />
                            <label for="k-swiss">K-Swiss</label>

                            <input type="checkbox" id="nike" value="NIKE" />
                            <label for="nike">Nike</label>

                            <input type="checkbox" id="puma" value="PUMA" />
                            <label for="puma">Puma</label>
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
                            <label for="esporte-e-lazer">
                                Esportes e lazer
                            </label>

                            <input type="checkbox" id="casual" value="CASUAL" />
                            <label for="casual">Casual</label>

                            <input
                                type="checkbox"
                                id="utilitario"
                                value="UTILITARIO"
                            />
                            <label for="utilitario">Utilitário</label>

                            <input
                                type="checkbox"
                                id="corrida"
                                value="CORRIDA"
                            />
                            <label for="corrida">Corrida</label>
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
                            <label for="masculino">Masculino</label>

                            <input
                                type="checkbox"
                                id="feminino"
                                value="FEMININO"
                            />
                            <label for="feminino">Feminino</label>

                            <input type="checkbox" id="unisex" value="UNISEX" />
                            <label for="unisex">Unisex</label>
                        </form>
                    </div>

                    <div className="stado">
                        <h3>Estado</h3>

                        <form>
                            <input type="radio" id="novo" value="NOVO" />
                            <label for="novo">Novo</label>

                            <input type="radio" id="usado" value="USADO" />
                            <label for="usado">Usado</label>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}
