# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2697<sub>(+97) | 2966<sub>(+35) | 3020<sub>(+7) |  |
| 0.35 | 2026-05-13 | 2600<sub>(+109) | 2931<sub>(+68) | 3013<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2491<sub>(+16) | 2863<sub>(+120) | 2912<sub>(+90) |  |
| 0.25.1 | 2026-04-12 | 2475<sub>(+90) | 2743<sub>(+96) | 2822<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2385<sub>(+514) | 2647<sub>(+591) | 2707<sub>(+562) |  |
| 0.08 | 2026-02-05 | 1871 | 2056 | 2145 |  |
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

Generated: 2026-06-17 06:26:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1871, 2385, 2475, 2491, 2600, 2697]
  line "STC (8.0+0.08s)" [1871, 2385, 2475, 2491, 2600, 2697]
  line "LTC (60.0+0.60s)" [2056, 2647, 2743, 2863, 2931, 2966]
  line "VLTC (2m24s+1.12s)" [2145, 2707, 2822, 2912, 3013, 3020]
  line "VLTC (2m24s+1.12s)" [2145, 2707, 2822, 2912, 3013, 3020]
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
  line "STC (8.0+0.08s)" [1871, 2385, 2475, 2491, 2600, 2697]
  line "STC (8.0+0.08s)" [1871, 2385, 2475, 2491, 2600, 2697]
  line "LTC (60.0+0.60s)" [2056, 2647, 2743, 2863, 2931, 2966]
  line "VLTC (2m24s+1.12s)" [2145, 2707, 2822, 2912, 3013, 3020]
  line "VLTC (2m24s+1.12s)" [2145, 2707, 2822, 2912, 3013, 3020]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3020 | 41 | 172 | 49% | 3031 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2966 | 44 | 154 | 51% | 2954 | 45% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2697 | 45 | 156 | 50% | 2703 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 28 | 388 | 51% | 3004 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2931 | 30 | 324 | 49% | 2942 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2600 | 31 | 340 | 50% | 2601 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2912 | 32 | 304 | 51% | 2905 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2863 | 30 | 336 | 49% | 2873 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2491 | 36 | 280 | 50% | 2487 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 31 | 328 | 51% | 2816 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2743 | 32 | 312 | 50% | 2745 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2475 | 31 | 356 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2707 | 36 | 236 | 55% | 2655 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2647 | 36 | 228 | 57% | 2584 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2385 | 37 | 236 | 55% | 2340 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1871 | 31 | 356 | 48% | 1895 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |