# Engine: Prophet

Author: James Swafford

Home: https://github.com/jswaff/prophet

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-05-16 | 2086<sub>(-70) | 2388<sub>(-29) | 2495<sub>(+3) |  |
| 5.1 | 2025-09-16 | 2156<sub>(+new) | 2417<sub>(+new) | 2492<sub>(+new) |  |
| 5.0 | 2025-08-05 |  |  |  |  |
| 4.4 | 2024-10-22 |  |  |  |  |
| 4.3 | 2022-10-21 |  |  |  |  |
| 4.2 | 2022-06-23 |  |  |  |  |
| 4.1 | 2022-01-02 |  |  |  |  |
| 4.0 | 2021-10-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prophet+<version>&body=###%20Engine%20name%0AProphet%0A%0A###%20Version%0A5.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:28:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2156, 2086]
  line "STC (8.0+0.08s)" [2156, 2086]
  line "LTC (60.0+0.60s)" [2417, 2388]
  line "VLTC (2m24s+1.12s)" [2492, 2495]
  line "VLTC (2m24s+1.12s)" [2492, 2495]
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
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2000 --> 2500
  line "STC (8.0+0.08s)" [2156, 2086]
  line "STC (8.0+0.08s)" [2156, 2086]
  line "LTC (60.0+0.60s)" [2417, 2388]
  line "VLTC (2m24s+1.12s)" [2492, 2495]
  line "VLTC (2m24s+1.12s)" [2492, 2495]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 31 | 346 | 50% | 2499 | 27% |
| 5.2 | LTC <sub>(60.0+0.60s)</sub> | 2388 | 31 | 360 | 49% | 2392 | 29% |
| 5.2 | STC <sub>(8.0+0.08s)</sub> | 2086 | 35 | 288 | 50% | 2076 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 30 | 380 | 48% | 2523 | 26% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2417 | 28 | 416 | 49% | 2431 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2156 | 27 | 482 | 51% | 2149 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |