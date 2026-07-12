# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1916<sub>(+575) | 2171<sub>(+348) | 2344<sub>(+235) |  |
| R4 | 2026-04-22 | 1341<sub>(+new) | 1823<sub>(+new) | 2109<sub>(+new) |  |
| R3 | 2026-04-22 |  |  |  |  |
| R2 | 2025-09-25 |  |  |  |  |
| R1 | 2025-09-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:42:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "STC (8.0+0.08s)" [1341, 1916]
  line "STC (8.0+0.08s)" [1341, 1916]
  line "LTC (60.0+0.60s)" [1823, 2171]
  line "VLTC (2m24s+1.12s)" [2109, 2344]
  line "VLTC (2m24s+1.12s)" [2109, 2344]
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
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "STC (8.0+0.08s)" [1341, 1916]
  line "STC (8.0+0.08s)" [1341, 1916]
  line "LTC (60.0+0.60s)" [1823, 2171]
  line "VLTC (2m24s+1.12s)" [2109, 2344]
  line "VLTC (2m24s+1.12s)" [2109, 2344]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2344 | 28 | 402 | 49% | 2356 | 34% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 29 | 410 | 51% | 2155 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1916 | 28 | 458 | 50% | 1910 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2109 | 31 | 372 | 41% | 2221 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1823 | 36 | 298 | 46% | 1893 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1341 | 38 | 288 | 47% | 1404 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |