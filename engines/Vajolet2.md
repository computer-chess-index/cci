# Engine: Vajolet2

Author: Marco Belli

Home: https://github.com/elcabesa/vajolet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-05-17 | 2843<sub>(+23) | 3110<sub>(+70) | 3156<sub>(+37) |  |
| 3.1 | 2026-04-03 | 2820<sub>(+100) | 3040<sub>(+58) | 3119<sub>(+61) |  |
| 3.0 | 2025-12-21 | 2720<sub>(+new) | 2982<sub>(+new) | 3058<sub>(+new) |  |
| 2.8 | 2019-11-01 |  |  |  |  |
| 2.7 | 2019-04-03 |  |  |  |  |
| 2.6.2 | 2018-11-30 |  |  |  |  |
| 2.6.1 | 2018-09-04 |  |  |  |  |
| 2.6 | 2018-06-26 |  |  |  |  |
| 2.5 | 2018-01-25 |  |  |  |  |
| 2.4 | 2017-11-19 |  |  |  |  |
| 2.3 | 2017-02-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Vajolet2+<version>&body=###%20Engine%20name%0AVajolet2%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:46:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2720, 2820, 2843]
  line "STC (8.0+0.08s)" [2720, 2820, 2843]
  line "LTC (60.0+0.60s)" [2982, 3040, 3110]
  line "VLTC (2m24s+1.12s)" [3058, 3119, 3156]
  line "VLTC (2m24s+1.12s)" [3058, 3119, 3156]
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
  x-axis ["3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3200
  line "STC (8.0+0.08s)" [2720, 2820, 2843]
  line "STC (8.0+0.08s)" [2720, 2820, 2843]
  line "LTC (60.0+0.60s)" [2982, 3040, 3110]
  line "VLTC (2m24s+1.12s)" [3058, 3119, 3156]
  line "VLTC (2m24s+1.12s)" [3058, 3119, 3156]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3156 | 30 | 306 | 48% | 3173 | 53% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3110 | 30 | 324 | 50% | 3112 | 47% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2843 | 30 | 348 | 49% | 2851 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 29 | 352 | 50% | 3121 | 47% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3040 | 27 | 406 | 50% | 3038 | 43% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2820 | 28 | 384 | 50% | 2817 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 31 | 318 | 52% | 3040 | 46% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 29 | 344 | 52% | 2962 | 44% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2720 | 29 | 386 | 52% | 2689 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |