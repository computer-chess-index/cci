# Engine: Astra

Author: Semih Özalp

Home: https://github.com/h1me01/Astra

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-05-26 | 3378<sub>(+106) | 3522<sub>(+58) | 3540<sub>(+38) |  |
| 6.1.1 | 2025-07-21 | 3272<sub>(+new) | 3464<sub>(+new) | 3502<sub>(+new) |  |
| 6.1 | 2025-07-20 |  |  |  |  |
| 6.0 | 2025-07-07 |  |  |  |  |
| 5.2 | 2025-05-02 |  |  |  |  |
| 5.1.1 | 2025-04-09 |  |  |  |  |
| 5.1 | 2025-03-16 |  |  |  |  |
| 5.0 | 2025-02-04 |  |  |  |  |
| 4.1 | 2024-12-28 |  |  |  |  |
| 4.0.1 | 2024-11-17 |  |  |  |  |
| 4.0 | 2024-11-17 |  |  |  |  |
| 3.2 | 2024-10-05 |  |  |  |  |
| 3.1 | 2024-10-03 |  |  |  |  |
| 3.0 | 2024-10-01 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Astra+<version>&body=###%20Engine%20name%0AAstra%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-15 06:22:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3272, 3378]
  line "STC (8.0+0.08s)" [3272, 3378]
  line "LTC (60.0+0.60s)" [3464, 3522]
  line "VLTC (2m24s+1.12s)" [3502, 3540]
  line "VLTC (2m24s+1.12s)" [3502, 3540]
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
  x-axis ["6.1.1", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3272, 3378]
  line "STC (8.0+0.08s)" [3272, 3378]
  line "LTC (60.0+0.60s)" [3464, 3522]
  line "VLTC (2m24s+1.12s)" [3502, 3540]
  line "VLTC (2m24s+1.12s)" [3502, 3540]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 33 | 202 | 49% | 3549 | 89% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 36 | 178 | 50% | 3525 | 87% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3378 | 34 | 214 | 49% | 3384 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 23 | 420 | 52% | 3486 | 87% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 25 | 400 | 51% | 3452 | 81% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3272 | 23 | 514 | 51% | 3258 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |