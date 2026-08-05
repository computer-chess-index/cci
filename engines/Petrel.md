# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 |  |  |  |  |
| 4.0 | 2026-08-04 |  |  |  |  |
| 4.0 | 2026-08-04 |  |  |  |  |
| 4.0 | 2026-08-04 |  |  |  |  |
| 4.0 | 2026-08-04 |  |  |  |  |
| 4.0 | 2026-08-04 |  |  |  |  |
| 3.5 | 2026-06-02 | 3009<sub>(+new) | 3181<sub>(+new) | 3259<sub>(+new) |  |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2912<sub>(+new) | 3131<sub>(+new) | 3162<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2938<sub>(+new) | 3159<sub>(+new) | 3181<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2907<sub>(+87) | 3101<sub>(+99) | 3155<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2820<sub>(+75) | 3002<sub>(+71) | 3087<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2745<sub>(+534) | 2931<sub>(+533) | 2955<sub>(+484) |  |
| 2.1 | 2025-10-13 | 2211<sub>(+new) | 2398<sub>(+new) | 2471<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-05 06:28:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2211, 2745, 2820, 2907, 2938, 2912, 3009]
  line "STC (8.0+0.08s)" [2211, 2745, 2820, 2907, 2938, 2912, 3009]
  line "LTC (60.0+0.60s)" [2398, 2931, 3002, 3101, 3159, 3131, 3181]
  line "VLTC (2m24s+1.12s)" [2471, 2955, 3087, 3155, 3181, 3162, 3259]
  line "VLTC (2m24s+1.12s)" [2471, 2955, 3087, 3155, 3181, 3162, 3259]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 27 | 364 | 49% | 3264 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3181 | 28 | 356 | 50% | 3170 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3009 | 28 | 364 | 49% | 3016 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 35 | 228 | 52% | 3146 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 42 | 158 | 53% | 3112 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2912 | 41 | 170 | 49% | 2923 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 104 | 24 | 58% | 3117 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3159 | 102 | 24 | 54% | 3123 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2938 | 110 | 24 | 50% | 2940 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 35 | 226 | 49% | 3166 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3101 | 33 | 260 | 52% | 3085 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2907 | 33 | 264 | 50% | 2909 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3087 | 35 | 232 | 51% | 3079 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 36 | 212 | 52% | 2985 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2820 | 37 | 224 | 48% | 2838 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2955 | 51 | 128 | 57% | 2877 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2931 | 43 | 184 | 59% | 2842 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2745 | 56 | 108 | 53% | 2701 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2471 | 57 | 110 | 48% | 2502 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2398 | 58 | 108 | 48% | 2417 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2211 | 62 | 88 | 51% | 2206 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |