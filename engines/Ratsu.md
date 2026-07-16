# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2388<sub>(+159) | 2665<sub>(+128) | 2799<sub>(+199) |  |
| 2.0.0 | 2026-05-23 | 2229<sub>(+344) | 2537<sub>(+380) | 2600<sub>(+378) |  |
| 1.2.0 | 2026-05-07 | 1885<sub>(+168) | 2157<sub>(+160) | 2222<sub>(+140) |  |
| 1.1.0 | 2026-04-21 | 1717<sub>(+79) | 1997<sub>(+126) | 2082<sub>(+141) |  |
| 1.0.0 | 2026-02-20 | 1638<sub>(+103) | 1871<sub>(+77) | 1941<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1535 | 1794 | 1852 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:28:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1535, 1638, 1717, 1885, 2229, 2388]
  line "STC (8.0+0.08s)" [1535, 1638, 1717, 1885, 2229, 2388]
  line "LTC (60.0+0.60s)" [1794, 1871, 1997, 2157, 2537, 2665]
  line "VLTC (2m24s+1.12s)" [1852, 1941, 2082, 2222, 2600, 2799]
  line "VLTC (2m24s+1.12s)" [1852, 1941, 2082, 2222, 2600, 2799]
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
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2800
  line "STC (8.0+0.08s)" [1535, 1638, 1717, 1885, 2229, 2388]
  line "STC (8.0+0.08s)" [1535, 1638, 1717, 1885, 2229, 2388]
  line "LTC (60.0+0.60s)" [1794, 1871, 1997, 2157, 2537, 2665]
  line "VLTC (2m24s+1.12s)" [1852, 1941, 2082, 2222, 2600, 2799]
  line "VLTC (2m24s+1.12s)" [1852, 1941, 2082, 2222, 2600, 2799]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2799 | 43 | 172 | 49% | 2803 | 38% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2665 | 45 | 160 | 51% | 2655 | 29% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2388 | 49 | 142 | 50% | 2391 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2600 | 48 | 136 | 49% | 2616 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 45 | 168 | 54% | 2493 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2229 | 44 | 182 | 55% | 2176 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2222 | 31 | 364 | 51% | 2215 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2157 | 34 | 292 | 50% | 2144 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1885 | 32 | 356 | 51% | 1866 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2082 | 32 | 348 | 53% | 2055 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1997 | 33 | 326 | 51% | 1986 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1717 | 32 | 352 | 50% | 1704 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1941 | 29 | 390 | 50% | 1941 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1871 | 31 | 384 | 51% | 1864 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1638 | 30 | 394 | 48% | 1655 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1852 | 41 | 208 | 50% | 1858 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1794 | 36 | 280 | 53% | 1764 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1535 | 39 | 242 | 49% | 1543 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |