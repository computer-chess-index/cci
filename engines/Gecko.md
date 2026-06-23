# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2666<sub>(+65) | 2982<sub>(+48) | 3009<sub>(-6) |  |
| 0.35 | 2026-05-13 | 2601<sub>(+109) | 2934<sub>(+69) | 3015<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2492<sub>(+16) | 2865<sub>(+120) | 2915<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2476<sub>(+89) | 2745<sub>(+96) | 2823<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2387<sub>(+516) | 2649<sub>(+593) | 2708<sub>(+561) |  |
| 0.08 | 2026-02-05 | 1871 | 2056 | 2147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-23 06:25:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1871, 2387, 2476, 2492, 2601, 2666]
  line "STC (8.0+0.08s)" [1871, 2387, 2476, 2492, 2601, 2666]
  line "LTC (60.0+0.60s)" [2056, 2649, 2745, 2865, 2934, 2982]
  line "VLTC (2m24s+1.12s)" [2147, 2708, 2823, 2915, 3015, 3009]
  line "VLTC (2m24s+1.12s)" [2147, 2708, 2823, 2915, 3015, 3009]
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
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1871, 2387, 2476, 2492, 2601, 2666]
  line "STC (8.0+0.08s)" [1871, 2387, 2476, 2492, 2601, 2666]
  line "LTC (60.0+0.60s)" [2056, 2649, 2745, 2865, 2934, 2982]
  line "VLTC (2m24s+1.12s)" [2147, 2708, 2823, 2915, 3015, 3009]
  line "VLTC (2m24s+1.12s)" [2147, 2708, 2823, 2915, 3015, 3009]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3009 | 34 | 256 | 48% | 3021 | 47% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 33 | 270 | 51% | 2974 | 42% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2666 | 33 | 304 | 49% | 2674 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 28 | 388 | 51% | 3005 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 30 | 324 | 49% | 2944 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2601 | 31 | 340 | 50% | 2603 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 32 | 304 | 51% | 2908 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 30 | 336 | 49% | 2874 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2492 | 36 | 280 | 50% | 2488 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2823 | 31 | 328 | 51% | 2817 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 32 | 312 | 50% | 2746 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 31 | 356 | 51% | 2466 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 36 | 228 | 57% | 2585 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2387 | 37 | 236 | 55% | 2341 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2147 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1871 | 31 | 356 | 48% | 1895 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |