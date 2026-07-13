# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2676<sub>(+72) | 2981<sub>(+43) | 3021<sub>(+2) |  |
| 0.35 | 2026-05-13 | 2604<sub>(+111) | 2938<sub>(+71) | 3019<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2493<sub>(+17) | 2867<sub>(+120) | 2919<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2476<sub>(+89) | 2747<sub>(+96) | 2826<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2387<sub>(+517) | 2651<sub>(+595) | 2711<sub>(+564) |  |
| 0.08 | 2026-02-05 | 1870 | 2056 | 2147 |  |
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

Generated: 2026-07-13 06:28:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2493, 2604, 2676]
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2493, 2604, 2676]
  line "LTC (60.0+0.60s)" [2056, 2651, 2747, 2867, 2938, 2981]
  line "VLTC (2m24s+1.12s)" [2147, 2711, 2826, 2919, 3019, 3021]
  line "VLTC (2m24s+1.12s)" [2147, 2711, 2826, 2919, 3019, 3021]
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
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2493, 2604, 2676]
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2493, 2604, 2676]
  line "LTC (60.0+0.60s)" [2056, 2651, 2747, 2867, 2938, 2981]
  line "VLTC (2m24s+1.12s)" [2147, 2711, 2826, 2919, 3019, 3021]
  line "VLTC (2m24s+1.12s)" [2147, 2711, 2826, 2919, 3019, 3021]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 32 | 292 | 50% | 3020 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 32 | 302 | 50% | 2981 | 41% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2676 | 30 | 352 | 50% | 2673 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3019 | 28 | 388 | 51% | 3009 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 30 | 324 | 49% | 2948 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2604 | 31 | 340 | 50% | 2606 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 32 | 304 | 51% | 2911 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2867 | 30 | 336 | 49% | 2877 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2493 | 36 | 280 | 50% | 2489 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 31 | 328 | 51% | 2820 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 32 | 312 | 50% | 2749 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 31 | 356 | 51% | 2468 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2711 | 36 | 236 | 55% | 2660 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2651 | 36 | 228 | 57% | 2588 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2387 | 37 | 236 | 55% | 2342 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2147 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1870 | 31 | 356 | 48% | 1894 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |