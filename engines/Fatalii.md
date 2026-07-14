# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2267<sub>(-1) | 2508<sub>(-26) | 2592<sub>(-5) |  |
| 0.10.0 | 2026-03-09 | 2268<sub>(+new) | 2534<sub>(+new) | 2597<sub>(+new) |  |
| 0.9.0 | 2025-02-08 |  |  |  |  |
| 0.8.0 | 2024-10-17 |  |  |  |  |
| 0.7.0 | 2024-05-06 |  |  |  |  |
| 0.6.1 | 2024-04-05 |  |  |  |  |
| 0.6.0 | 2024-01-10 |  |  |  |  |
| 0.5.0 | 2023-10-11 |  |  |  |  |
| 0.4.0 | 2023-03-06 |  |  |  |  |
| 0.3.1 | 2022-10-05 |  |  |  |  |
| 0.3.0 | 2022-09-10 |  |  |  |  |
| 0.2.1 | 2022-09-03 |  |  |  |  |
| 0.2.0 | 2022-05-15 |  |  |  |  |
| 0.1.2 | 2022-04-16 |  |  |  |  |
| 0.1.1 | 2022-02-21 |  |  |  |  |
| 0.1.0 | 2022-02-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fatalii+<version>&body=###%20Engine%20name%0AFatalii%0A%0A###%20Version%0A0.10.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:24:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2200 --> 2600
  line "STC (8.0+0.08s)" [2268, 2267]
  line "STC (8.0+0.08s)" [2268, 2267]
  line "LTC (60.0+0.60s)" [2534, 2508]
  line "VLTC (2m24s+1.12s)" [2597, 2592]
  line "VLTC (2m24s+1.12s)" [2597, 2592]
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
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2200 --> 2600
  line "STC (8.0+0.08s)" [2268, 2267]
  line "STC (8.0+0.08s)" [2268, 2267]
  line "LTC (60.0+0.60s)" [2534, 2508]
  line "VLTC (2m24s+1.12s)" [2597, 2592]
  line "VLTC (2m24s+1.12s)" [2597, 2592]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.10.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 30 | 390 | 50% | 2593 | 27% |
| 0.10.1 | LTC <sub>(60.0+0.60s)</sub> | 2508 | 30 | 368 | 50% | 2507 | 29% |
| 0.10.1 | STC <sub>(8.0+0.08s)</sub> | 2267 | 31 | 352 | 49% | 2279 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 29 | 424 | 48% | 2620 | 25% |
| 0.10.0 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 28 | 454 | 51% | 2530 | 25% |
| 0.10.0 | STC <sub>(8.0+0.08s)</sub> | 2268 | 27 | 464 | 52% | 2242 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |