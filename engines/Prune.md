# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3082<sub>(+new) | 3310<sub>(+new) | 3370<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2896<sub>(+266) | 3151<sub>(+266) | 3195<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2630<sub>(-44) | 2885<sub>(-9) | 2996<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2674<sub>(+159) | 2894<sub>(+124) | 3009<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2515<sub>(+46) | 2770<sub>(-6) | 2858<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2469<sub>(-50) | 2776<sub>(+30) | 2859<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2519<sub>(+new) | 2746<sub>(+new) | 2812<sub>(+new) |  |
| 2.0.1 | 2025-10-21 |  |  |  |  |
| 2.0.0 | 2025-10-19 |  |  |  |  |
| 1.0.1 | 2025-10-15 |  |  |  |  |
| 1.0.0 | 2025-10-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A3.2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-26 06:27:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2519, 2469, 2515, 2674, 2630, 2896, 3082]
  line "STC (8.0+0.08s)" [2519, 2469, 2515, 2674, 2630, 2896, 3082]
  line "LTC (60.0+0.60s)" [2746, 2776, 2770, 2894, 2885, 3151, 3310]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3370]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3370]
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
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2519, 2469, 2515, 2674, 2630, 2896, 3082]
  line "STC (8.0+0.08s)" [2519, 2469, 2515, 2674, 2630, 2896, 3082]
  line "LTC (60.0+0.60s)" [2746, 2776, 2770, 2894, 2885, 3151, 3310]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3370]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3370]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 25 | 402 | 50% | 3367 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 25 | 390 | 52% | 3297 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3082 | 24 | 470 | 51% | 3067 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 32 | 284 | 51% | 3190 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 31 | 288 | 52% | 3139 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2896 | 33 | 276 | 51% | 2877 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2996 | 35 | 236 | 48% | 3011 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2885 | 36 | 236 | 52% | 2871 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2630 | 39 | 212 | 47% | 2657 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3009 | 72 | 56 | 57% | 2955 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 66 | 72 | 49% | 2911 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2674 | 90 | 40 | 55% | 2633 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 54 | 108 | 49% | 2871 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 54 | 108 | 45% | 2831 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2515 | 55 | 118 | 40% | 2628 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 95 | 32 | 50% | 2857 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2776 | 64 | 72 | 47% | 2800 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2469 | 60 | 92 | 48% | 2483 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 53 | 108 | 50% | 2807 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 51 | 112 | 51% | 2739 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2519 | 53 | 116 | 46% | 2579 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |