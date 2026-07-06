# Engine: PZChessBot

Author: Kevin Lu

Home: https://github.com/kevlu8/PZChessBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.1 | 2026-06-27 | 3325<sub>(+40) | 3506<sub>(+35) | 3513<sub>(-5) |  |
| 7.0 | 2026-05-07 | 3285<sub>(+96) | 3471<sub>(+61) | 3518<sub>(+53) |  |
| 6.1 | 2026-02-01 | 3189<sub>(+33) | 3410<sub>(+62) | 3465<sub>(+56) |  |
| 6.0 | 2026-01-01 | 3156<sub>(+120) | 3348<sub>(+121) | 3409<sub>(+153) |  |
| 5.0 | 2025-10-19 | 3036<sub>(+new) | 3227<sub>(+new) | 3256<sub>(+new) |  |
| 4.0 | 2025-10-03 |  |  |  |  |
| 3.0 | 2025-07-02 |  |  |  |  |
| 2.0 | 2025-06-17 |  |  |  |  |
| 1.0 | 2025-04-20 |  |  |  |  |
| 20250318T22 | 2025-03-19 |  |  |  |  |
| 20250311T07 | 2025-03-11 |  |  |  |  |
| 20250307T21 | 2025-03-08 |  |  |  |  |
| 20250306T21 | 2025-03-07 |  |  |  |  |
| 20250302T22 | 2025-03-04 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PZChessBot+<version>&body=###%20Engine%20name%0APZChessBot%0A%0A###%20Version%0A7.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-06 06:27:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3036, 3156, 3189, 3285, 3325]
  line "STC (8.0+0.08s)" [3036, 3156, 3189, 3285, 3325]
  line "LTC (60.0+0.60s)" [3227, 3348, 3410, 3471, 3506]
  line "VLTC (2m24s+1.12s)" [3256, 3409, 3465, 3518, 3513]
  line "VLTC (2m24s+1.12s)" [3256, 3409, 3465, 3518, 3513]
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
  x-axis ["5.0", "6.0", "6.1", "7.0", "7.1"]
  y-axis "Elo Rating" 3000 --> 3600
  line "STC (8.0+0.08s)" [3036, 3156, 3189, 3285, 3325]
  line "STC (8.0+0.08s)" [3036, 3156, 3189, 3285, 3325]
  line "LTC (60.0+0.60s)" [3227, 3348, 3410, 3471, 3506]
  line "VLTC (2m24s+1.12s)" [3256, 3409, 3465, 3518, 3513]
  line "VLTC (2m24s+1.12s)" [3256, 3409, 3465, 3518, 3513]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 47 | 102 | 50% | 3515 | 85% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 44 | 120 | 50% | 3510 | 88% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3325 | 50 | 98 | 51% | 3318 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 25 | 362 | 50% | 3518 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 25 | 388 | 51% | 3464 | 84% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 28 | 340 | 50% | 3285 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3465 | 21 | 520 | 50% | 3464 | 80% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 23 | 464 | 50% | 3409 | 76% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3189 | 25 | 456 | 51% | 3181 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3409 | 28 | 312 | 50% | 3405 | 73% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3348 | 31 | 268 | 50% | 3348 | 69% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3156 | 32 | 264 | 49% | 3164 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 32 | 254 | 50% | 3247 | 65% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3227 | 38 | 184 | 53% | 3181 | 64% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3036 | 35 | 236 | 55% | 2952 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |