# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-06-24 | 3335<sub>(+52) | 3499<sub>(+40) | 3537<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3283<sub>(+97) | 3459<sub>(+75) | 3490<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3186<sub>(+new) | 3384<sub>(+new) | 3421<sub>(+new) |  |
| 4.1.0 | 2024-03-11 |  |  |  |  |
| 4.0.0 | 2023-12-17 |  |  |  |  |
| 3.0.0 | 2023-11-02 |  |  |  |  |
| 2.0.0 | 2023-09-24 |  |  |  |  |
| 1.0.0 | 2023-07-25 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-22 06:29:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3186, 3283, 3335]
  line "STC (8.0+0.08s)" [3186, 3283, 3335]
  line "LTC (60.0+0.60s)" [3384, 3459, 3499]
  line "VLTC (2m24s+1.12s)" [3421, 3490, 3537]
  line "VLTC (2m24s+1.12s)" [3421, 3490, 3537]
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
  x-axis ["5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3186, 3283, 3335]
  line "STC (8.0+0.08s)" [3186, 3283, 3335]
  line "LTC (60.0+0.60s)" [3384, 3459, 3499]
  line "VLTC (2m24s+1.12s)" [3421, 3490, 3537]
  line "VLTC (2m24s+1.12s)" [3421, 3490, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 18 | 722 | 51% | 3533 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 17 | 824 | 51% | 3495 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3335 | 17 | 922 | 51% | 3328 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 14 | 1184 | 50% | 3488 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 14 | 1228 | 50% | 3461 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3283 | 15 | 1188 | 50% | 3282 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 32 | 248 | 51% | 3414 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3384 | 27 | 340 | 54% | 3352 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3186 | 29 | 332 | 48% | 3202 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |