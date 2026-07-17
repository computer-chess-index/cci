# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2687<sub>(+238) | 3028<sub>(+221) | 3054<sub>(+137) |  |
| 8.0 | 2026-05-02 | 2449<sub>(+118) | 2807<sub>(+129) | 2917<sub>(+117) |  |
| 7.0 | 2026-04-25 | 2331<sub>(+33) | 2678<sub>(+66) | 2800<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2298<sub>(+319) | 2612<sub>(+220) | 2759<sub>(+216) |  |
| 5.0 | 2026-04-15 | 1979<sub>(+47) | 2392<sub>(+171) | 2543<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1932<sub>(+222) | 2221<sub>(+166) | 2381<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1710<sub>(+589) | 2055<sub>(+720) | 2203<sub>(+645) |  |
| 2.0 | 2026-04-08 | 1121<sub>(+391) | 1335<sub>(+530) | 1558<sub>(+653) |  |
| 1.0 | 2026-04-06 | 730 | 805 | 905 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:27:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [730, 1121, 1710, 1932, 1979, 2298, 2331, 2449, 2687]
  line "STC (8.0+0.08s)" [730, 1121, 1710, 1932, 1979, 2298, 2331, 2449, 2687]
  line "LTC (60.0+0.60s)" [805, 1335, 2055, 2221, 2392, 2612, 2678, 2807, 3028]
  line "VLTC (2m24s+1.12s)" [905, 1558, 2203, 2381, 2543, 2759, 2800, 2917, 3054]
  line "VLTC (2m24s+1.12s)" [905, 1558, 2203, 2381, 2543, 2759, 2800, 2917, 3054]
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
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [730, 1121, 1710, 1932, 1979, 2298, 2331, 2449, 2687]
  line "STC (8.0+0.08s)" [730, 1121, 1710, 1932, 1979, 2298, 2331, 2449, 2687]
  line "LTC (60.0+0.60s)" [805, 1335, 2055, 2221, 2392, 2612, 2678, 2807, 3028]
  line "VLTC (2m24s+1.12s)" [905, 1558, 2203, 2381, 2543, 2759, 2800, 2917, 3054]
  line "VLTC (2m24s+1.12s)" [905, 1558, 2203, 2381, 2543, 2759, 2800, 2917, 3054]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 30 | 320 | 51% | 3046 | 51% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3028 | 32 | 288 | 48% | 3039 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 31 | 356 | 54% | 2655 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 30 | 358 | 49% | 2925 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 32 | 302 | 50% | 2805 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2449 | 31 | 356 | 52% | 2421 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2800 | 34 | 270 | 52% | 2784 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 35 | 266 | 50% | 2681 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2331 | 33 | 320 | 48% | 2356 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2759 | 36 | 248 | 52% | 2743 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2612 | 36 | 274 | 51% | 2601 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2298 | 32 | 344 | 54% | 2259 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2543 | 33 | 324 | 49% | 2554 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2392 | 36 | 268 | 50% | 2391 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1979 | 36 | 276 | 50% | 1979 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2381 | 34 | 310 | 54% | 2342 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2221 | 36 | 272 | 49% | 2233 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1932 | 39 | 248 | 52% | 1914 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 40 | 232 | 51% | 2199 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 39 | 246 | 48% | 2075 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1710 | 43 | 208 | 47% | 1743 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1558 | 34 | 316 | 48% | 1588 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1335 | 39 | 258 | 46% | 1389 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1121 | 35 | 300 | 51% | 1095 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 905 | 79 | 110 | 38% | 1068 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 805 | 84 | 104 | 37% | 1023 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 730 | 89 | 92 | 38% | 936 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |