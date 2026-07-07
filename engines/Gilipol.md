# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2664<sub>(+130) | 2975<sub>(+120) | 3098<sub>(+105) |  |
| 1.00netbin | 2026-04-13 | 2534<sub>(+2147) | 2855<sub>(+2405) | 2993<sub>(+2534) |  |
| 1.00 | 2026-04-12 | 387 | 450 | 459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:25:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [387, 2534, 2664]
  line "STC (8.0+0.08s)" [387, 2534, 2664]
  line "LTC (60.0+0.60s)" [450, 2855, 2975]
  line "VLTC (2m24s+1.12s)" [459, 2993, 3098]
  line "VLTC (2m24s+1.12s)" [459, 2993, 3098]
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
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [387, 2534, 2664]
  line "STC (8.0+0.08s)" [387, 2534, 2664]
  line "LTC (60.0+0.60s)" [450, 2855, 2975]
  line "VLTC (2m24s+1.12s)" [459, 2993, 3098]
  line "VLTC (2m24s+1.12s)" [459, 2993, 3098]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3098 | 29 | 346 | 53% | 3067 | 52% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2975 | 31 | 308 | 51% | 2961 | 46% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2664 | 33 | 300 | 53% | 2638 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 2993 | 28 | 426 | 57% | 2776 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2855 | 25 | 546 | 59% | 2677 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2534 | 28 | 470 | 55% | 2372 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 459 | 58 | 176 | 24% | 1048 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 450 | 59 | 148 | 27% | 941 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 387 | 55 | 132 | 34% | 729 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |