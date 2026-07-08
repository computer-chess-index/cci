# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2669<sub>(+66) | 2981<sub>(+46) | 3015<sub>(-1) |  |
| 0.35 | 2026-05-13 | 2603<sub>(+111) | 2935<sub>(+69) | 3016<sub>(+99) |  |
| 0.30 | 2026-05-01 | 2492<sub>(+16) | 2866<sub>(+119) | 2917<sub>(+91) |  |
| 0.25.1 | 2026-04-12 | 2476<sub>(+89) | 2747<sub>(+97) | 2826<sub>(+117) |  |
| 0.25 | 2026-04-06 | 2387<sub>(+517) | 2650<sub>(+595) | 2709<sub>(+564) |  |
| 0.08 | 2026-02-05 | 1870 | 2055 | 2145 |  |
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

Generated: 2026-07-08 06:25:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2492, 2603, 2669]
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2492, 2603, 2669]
  line "LTC (60.0+0.60s)" [2055, 2650, 2747, 2866, 2935, 2981]
  line "VLTC (2m24s+1.12s)" [2145, 2709, 2826, 2917, 3016, 3015]
  line "VLTC (2m24s+1.12s)" [2145, 2709, 2826, 2917, 3016, 3015]
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
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2492, 2603, 2669]
  line "STC (8.0+0.08s)" [1870, 2387, 2476, 2492, 2603, 2669]
  line "LTC (60.0+0.60s)" [2055, 2650, 2747, 2866, 2935, 2981]
  line "VLTC (2m24s+1.12s)" [2145, 2709, 2826, 2917, 3016, 3015]
  line "VLTC (2m24s+1.12s)" [2145, 2709, 2826, 2917, 3016, 3015]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 33 | 276 | 49% | 3020 | 46% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 33 | 282 | 50% | 2978 | 41% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2669 | 31 | 344 | 50% | 2672 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 28 | 388 | 51% | 3008 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2935 | 30 | 324 | 49% | 2946 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2603 | 31 | 340 | 50% | 2604 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 32 | 304 | 51% | 2909 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 336 | 49% | 2876 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2492 | 36 | 280 | 50% | 2489 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 31 | 328 | 51% | 2820 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 32 | 312 | 50% | 2749 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 31 | 356 | 51% | 2466 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2709 | 36 | 236 | 55% | 2660 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 36 | 228 | 57% | 2587 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2387 | 37 | 236 | 55% | 2341 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1870 | 31 | 356 | 48% | 1894 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |