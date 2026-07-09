# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3039<sub>(+138) | 3252<sub>(+52) | 3332<sub>(+57) |  |
| 1.3 | 2025-09-19 | 2901<sub>(+new) | 3200<sub>(+new) | 3275<sub>(+new) |  |
| 1.2 | 2025-05-21 |  |  |  |  |
| 1.1 | 2025-03-27 |  |  |  |  |
| 1.0 | 2025-01-14 |  |  |  |  |
| 0.6.0 | 2024-07-04 |  |  |  |  |
| 0.5.2 | 2024-04-16 |  |  |  |  |
| 0.5.1 | 2024-03-29 |  |  |  |  |
| 0.5.0 | 2024-03-01 |  |  |  |  |
| 0.4.1 | 2024-02-02 |  |  |  |  |
| 0.4.0 | 2024-01-26 |  |  |  |  |
| 0.3.1c | 2023-11-21 |  |  |  |  |
| 0.3.1b | 2023-11-21 |  |  |  |  |
| 0.3.1 | 2023-11-20 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:26:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "STC (8.0+0.08s)" [2901, 3039]
  line "STC (8.0+0.08s)" [2901, 3039]
  line "LTC (60.0+0.60s)" [3200, 3252]
  line "VLTC (2m24s+1.12s)" [3275, 3332]
  line "VLTC (2m24s+1.12s)" [3275, 3332]
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
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "STC (8.0+0.08s)" [2901, 3039]
  line "STC (8.0+0.08s)" [2901, 3039]
  line "LTC (60.0+0.60s)" [3200, 3252]
  line "VLTC (2m24s+1.12s)" [3275, 3332]
  line "VLTC (2m24s+1.12s)" [3275, 3332]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3332 | 44 | 128 | 50% | 3335 | 73% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3252 | 35 | 224 | 54% | 3221 | 60% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 3039 | 43 | 152 | 50% | 3038 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 24 | 462 | 52% | 3260 | 66% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 26 | 398 | 51% | 3190 | 63% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2901 | 22 | 640 | 53% | 2861 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |