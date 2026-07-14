# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2526<sub>(+135) | 2828<sub>(+127) | 2932<sub>(+162) |  |
| 1.1 | 2026-04-18 | 2391<sub>(+81) | 2701<sub>(+176) | 2770<sub>(+128) |  |
| 1.0 | 2025-12-27 | 2310 | 2525 | 2642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:24:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2310, 2391, 2526]
  line "STC (8.0+0.08s)" [2310, 2391, 2526]
  line "LTC (60.0+0.60s)" [2525, 2701, 2828]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
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
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "STC (8.0+0.08s)" [2310, 2391, 2526]
  line "STC (8.0+0.08s)" [2310, 2391, 2526]
  line "LTC (60.0+0.60s)" [2525, 2701, 2828]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
  line "VLTC (2m24s+1.12s)" [2642, 2770, 2932]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 37 | 216 | 51% | 2920 | 46% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 38 | 220 | 50% | 2830 | 37% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2526 | 42 | 192 | 49% | 2538 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2770 | 28 | 392 | 49% | 2776 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2701 | 28 | 418 | 50% | 2697 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2391 | 29 | 408 | 50% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2642 | 28 | 396 | 49% | 2646 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2525 | 31 | 328 | 52% | 2507 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2310 | 27 | 480 | 50% | 2307 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |