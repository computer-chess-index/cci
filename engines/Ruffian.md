# Engine: Ruffian

Author: Per-Ola Valfridsson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2004-02-01 | 2140<sub>(+10) | 2435<sub>(+8) | 2491<sub>(+22) |  |
| 1.0.5 | 2003-03-19 | 2130 | 2427 | 2469 |  |
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

Generated: 2026-07-17 06:28:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.5", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 2500
  line "STC (8.0+0.08s)" [2130, 2140]
  line "STC (8.0+0.08s)" [2130, 2140]
  line "LTC (60.0+0.60s)" [2427, 2435]
  line "VLTC (2m24s+1.12s)" [2469, 2491]
  line "VLTC (2m24s+1.12s)" [2469, 2491]
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
  line "STC (8.0+0.08s)" [2130, 2140]
  line "STC (8.0+0.08s)" [2130, 2140]
  line "LTC (60.0+0.60s)" [2427, 2435]
  line "VLTC (2m24s+1.12s)" [2469, 2491]
  line "VLTC (2m24s+1.12s)" [2469, 2491]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2491 | 51 | 132 | 50% | 2491 | 26% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 31 | 366 | 48% | 2453 | 22% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2140 | 25 | 590 | 50% | 2137 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2469 | 38 | 260 | 48% | 2492 | 22% |
| 1.0.5 | LTC <sub>(60.0+0.60s)</sub> | 2427 | 15 | 1464 | 50% | 2429 | 24% |
| 1.0.5 | STC <sub>(8.0+0.08s)</sub> | 2130 | 16 | 1560 | 47% | 2192 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |