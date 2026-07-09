# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 1986<sub>(+105) | 2346<sub>(+129) | 2437<sub>(+26) |  |
| 0.1.0 | 2026-02-17 | 1881 | 2217 | 2411 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A0.2.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:35:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1881, 1986]
  line "STC (8.0+0.08s)" [1881, 1986]
  line "LTC (60.0+0.60s)" [2217, 2346]
  line "VLTC (2m24s+1.12s)" [2411, 2437]
  line "VLTC (2m24s+1.12s)" [2411, 2437]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1881, 1986]
  line "STC (8.0+0.08s)" [1881, 1986]
  line "LTC (60.0+0.60s)" [2217, 2346]
  line "VLTC (2m24s+1.12s)" [2411, 2437]
  line "VLTC (2m24s+1.12s)" [2411, 2437]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 36 | 254 | 53% | 2411 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2346 | 34 | 292 | 49% | 2349 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1986 | 35 | 298 | 50% | 1982 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2411 | 126 | 28 | 21% | 2714 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 70 | 70 | 46% | 2249 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1881 | 97 | 40 | 41% | 2002 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |