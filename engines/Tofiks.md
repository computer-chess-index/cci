# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2174<sub>(+140) | 2418<sub>(+108) | 2481<sub>(+93) |  |
| 1.4.1 | 2026-04-11 | 2034<sub>(-38) | 2310<sub>(+30) | 2388<sub>(+15) |  |
| 1.4.0 | 2026-04-09 | 2072<sub>(+new) | 2280<sub>(+new) | 2373<sub>(+new) |  |
| 1.3.0 | 2023-10-22 |  |  |  |  |
| 1.2.0 | 2023-09-29 |  |  |  |  |
| 1.1.0 | 2023-08-17 |  |  |  |  |
| 1.0.0 | 2022-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:29:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2072, 2034, 2174]
  line "STC (8.0+0.08s)" [2072, 2034, 2174]
  line "LTC (60.0+0.60s)" [2280, 2310, 2418]
  line "VLTC (2m24s+1.12s)" [2373, 2388, 2481]
  line "VLTC (2m24s+1.12s)" [2373, 2388, 2481]
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
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2072, 2034, 2174]
  line "STC (8.0+0.08s)" [2072, 2034, 2174]
  line "LTC (60.0+0.60s)" [2280, 2310, 2418]
  line "VLTC (2m24s+1.12s)" [2373, 2388, 2481]
  line "VLTC (2m24s+1.12s)" [2373, 2388, 2481]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2481 | 28 | 400 | 50% | 2484 | 35% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2418 | 28 | 422 | 50% | 2415 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2174 | 28 | 456 | 46% | 2202 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 33 | 292 | 50% | 2384 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2310 | 34 | 296 | 50% | 2309 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2034 | 34 | 302 | 51% | 2021 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 40 | 216 | 47% | 2402 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2280 | 39 | 226 | 53% | 2257 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2072 | 43 | 184 | 50% | 2068 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |