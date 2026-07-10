# Engine: Ruffian

Author: Per-Ola Valfridsson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2004-02-01 | 2142<sub>(+8) | 2439<sub>(+8) | 2495<sub>(+22) |  |
| 1.0.5 | 2003-03-19 | 2134 | 2431 | 2473 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ruffian+<version>&body=###%20Engine%20name%0ARuffian%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-10 06:32:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2134, 2142]
  line "STC (8.0+0.08s)" [2134, 2142]
  line "LTC (60.0+0.60s)" [2431, 2439]
  line "VLTC (2m24s+1.12s)" [2473, 2495]
  line "VLTC (2m24s+1.12s)" [2473, 2495]
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
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2134, 2142]
  line "STC (8.0+0.08s)" [2134, 2142]
  line "LTC (60.0+0.60s)" [2431, 2439]
  line "VLTC (2m24s+1.12s)" [2473, 2495]
  line "VLTC (2m24s+1.12s)" [2473, 2495]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 51 | 132 | 50% | 2495 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 31 | 366 | 48% | 2458 | 22% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2142 | 25 | 578 | 50% | 2133 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2473 | 38 | 260 | 48% | 2498 | 22% |
| 1.0.5 | LTC <sub>(60.0+0.60s)</sub> | 2431 | 15 | 1464 | 50% | 2433 | 24% |
| 1.0.5 | STC <sub>(8.0+0.08s)</sub> | 2134 | 16 | 1560 | 47% | 2195 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |