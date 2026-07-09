# Engine: Aspen

Author: 

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 | 2660<sub>(-17) | 3079<sub>(+100) | 3120<sub>(+55) |  |
| 2.1.0 | 2026-05-21 | 2677<sub>(+new) | 2979<sub>(+new) | 3065<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2353<sub>(+171) | 2693<sub>(+52) | 2835<sub>(+155) |  |
| 1.2.3 | 2026-05-20 | 2182<sub>(+new) | 2641<sub>(+new) | 2680<sub>(+new) |  |
| 1.2.2 | 2026-05-19 |  |  |  |  |
| 1.2.1 | 2026-05-19 |  |  |  |  |
| 1.2.0 | 2026-05-19 |  |  |  |  |
| 1.0.1 | 2026-05-14 |  |  |  |  |
| 1.0.0 | 2026-05-12 |  |  |  |  |
| 0.2.0 | 2026-05-09 |  |  |  |  |
| 0.1.0 | 2026-05-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aspen+<version>&body=###%20Engine%20name%0AAspen%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:22:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "STC (8.0+0.08s)" [2353, 2182, 2677, 2660]
  line "STC (8.0+0.08s)" [2353, 2182, 2677, 2660]
  line "LTC (60.0+0.60s)" [2693, 2641, 2979, 3079]
  line "VLTC (2m24s+1.12s)" [2835, 2680, 3065, 3120]
  line "VLTC (2m24s+1.12s)" [2835, 2680, 3065, 3120]
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
  x-axis ["1.3.0", "1.2.3", "2.1.0", "2.2.0"]
  y-axis "Elo Rating" 2100 --> 3200
  line "STC (8.0+0.08s)" [2353, 2182, 2677, 2660]
  line "STC (8.0+0.08s)" [2353, 2182, 2677, 2660]
  line "LTC (60.0+0.60s)" [2693, 2641, 2979, 3079]
  line "VLTC (2m24s+1.12s)" [2835, 2680, 3065, 3120]
  line "VLTC (2m24s+1.12s)" [2835, 2680, 3065, 3120]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 48 | 122 | 50% | 3117 | 53% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3079 | 44 | 140 | 51% | 3070 | 59% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2660 | 47 | 142 | 46% | 2696 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3065 | 31 | 318 | 52% | 3051 | 45% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 28 | 382 | 51% | 2971 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2677 | 32 | 304 | 54% | 2641 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2835 | 59 | 92 | 54% | 2796 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2693 | 48 | 140 | 53% | 2664 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2353 | 47 | 158 | 45% | 2403 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2680 | 111 | 28 | 55% | 2626 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2641 | 101 | 36 | 67% | 2484 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2182 | 84 | 48 | 50% | 2187 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |