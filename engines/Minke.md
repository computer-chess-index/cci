# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3148<sub>(+28) | 3355<sub>(+53) | 3416<sub>(+45) |  |
| 5.0.0 | 2026-02-13 | 3120<sub>(+61) | 3302<sub>(+43) | 3371<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3059<sub>(+94) | 3259<sub>(+62) | 3283<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2965<sub>(+new) | 3197<sub>(+new) | 3233<sub>(+new) |  |
| 2.0.0 | 2025-09-14 |  |  |  |  |
| 1.0.0 | 2025-08-26 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:26:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2965, 3059, 3120, 3148]
  line "STC (8.0+0.08s)" [2965, 3059, 3120, 3148]
  line "LTC (60.0+0.60s)" [3197, 3259, 3302, 3355]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3371, 3416]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3371, 3416]
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
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2965, 3059, 3120, 3148]
  line "STC (8.0+0.08s)" [2965, 3059, 3120, 3148]
  line "LTC (60.0+0.60s)" [3197, 3259, 3302, 3355]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3371, 3416]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3371, 3416]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 26 | 354 | 50% | 3413 | 77% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 27 | 354 | 50% | 3352 | 70% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3148 | 29 | 318 | 50% | 3151 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 24 | 414 | 50% | 3371 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3302 | 26 | 382 | 51% | 3294 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3120 | 25 | 444 | 51% | 3116 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 30 | 276 | 51% | 3274 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3259 | 31 | 268 | 48% | 3274 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3059 | 33 | 252 | 51% | 3031 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 37 | 184 | 50% | 3235 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 32 | 252 | 48% | 3212 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2965 | 34 | 240 | 48% | 2977 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |