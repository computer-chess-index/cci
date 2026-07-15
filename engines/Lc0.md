# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2400<sub>(+new) | 2992<sub>(+new) | 3163<sub>(+new) |  |
| 0.32.0 | 2025-08-21 |  |  |  |  |
| 0.31.2 | 2024-10-20 |  |  |  |  |
| 0.31.1 | 2024-08-11 |  |  |  |  |
| 0.31.0 | 2024-06-16 |  |  |  |  |
| 0.30.0 | 2023-07-21 |  |  |  |  |
| 0.29.0 | 2022-12-13 | 2371<sub>(+new) | 2985<sub>(+new) | 3218<sub>(+new) |  |
| 0.28.2 | 2021-12-13 |  |  |  |  |
| 0.28.0 | 2021-08-25 |  |  |  |  |
| 0.27.0 | 2021-02-21 |  |  |  |  |
| 0.26.3 | 2020-10-10 |  |  |  |  |
| 0.26.2 | 2020-09-02 |  |  |  |  |
| 0.26.1 | 2020-07-15 |  |  |  |  |
| 0.26.0 | 2020-07-02 |  |  |  |  |
| 0.25.1 | 2020-04-30 |  |  |  |  |
| 0.25.0 | 2020-04-28 |  |  |  |  |
| 0.24.1 | 2020-03-15 |  |  |  |  |
| 0.24.0 | 2020-03-11 |  |  |  |  |
| 0.23.3 | 2020-02-18 |  |  |  |  |
| 0.23.2 | 2019-12-31 |  |  |  |  |
| 0.23.1 | 2019-12-03 |  |  |  |  |
| 0.23.0 | 2019-12-01 |  |  |  |  |
| 0.22.0 | 2019-08-05 |  |  |  |  |
| 0.21.4 | 2019-07-28 |  |  |  |  |
| 0.21.3 | 2019-07-21 |  |  |  |  |
| 0.21.2 | 2019-06-09 |  |  |  |  |
| 0.21.1 | 2019-03-23 |  |  |  |  |
| 0.21.0 | 2019-03-08 |  |  |  |  |
| 0.20.2 | 2019-02-01 |  |  |  |  |
| 0.20.1 | 2019-01-07 |  |  |  |  |
| 0.20.0 | 2019-01-01 |  |  |  |  |
| 0.19.1.1 | 2018-12-11 |  |  |  |  |
| 0.19.1 | 2018-12-10 |  |  |  |  |
| 0.19.0 | 2018-11-19 |  |  |  |  |
| 0.18.1 | 2018-10-02 |  |  |  |  |
| 0.18.0 | 2018-09-30 |  |  |  |  |
| 0.17.0 | 2018-08-27 |  |  |  |  |
| 0.16.0 | 2018-07-20 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-15 06:26:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2371, 2400]
  line "STC (8.0+0.08s)" [2371, 2400]
  line "LTC (60.0+0.60s)" [2985, 2992]
  line "VLTC (2m24s+1.12s)" [3218, 3163]
  line "VLTC (2m24s+1.12s)" [3218, 3163]
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
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2371, 2400]
  line "STC (8.0+0.08s)" [2371, 2400]
  line "LTC (60.0+0.60s)" [2985, 2992]
  line "VLTC (2m24s+1.12s)" [3218, 3163]
  line "VLTC (2m24s+1.12s)" [3218, 3163]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 24 | 488 | 49% | 3174 | 52% |
| 0.32.1 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 25 | 478 | 48% | 3008 | 46% |
| 0.32.1 | STC <sub>(8.0+0.08s)</sub> | 2400 | 22 | 704 | 50% | 2396 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 28 | 356 | 50% | 3218 | 54% |
| 0.29.0 | LTC <sub>(60.0+0.60s)</sub> | 2985 | 30 | 328 | 48% | 3000 | 47% |
| 0.29.0 | STC <sub>(8.0+0.08s)</sub> | 2371 | 32 | 400 | 42% | 2483 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |