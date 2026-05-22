# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2911<sub>(+new) | 3129<sub>(+new) | 3162<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2935<sub>(+new) | 3159<sub>(+new) | 3179<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2907<sub>(+87) | 3101<sub>(+99) | 3155<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2820<sub>(+74) | 3002<sub>(+71) | 3086<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2746<sub>(+529) | 2931<sub>(+528) | 2954<sub>(+479) |  |
| 2.1 | 2025-10-13 | 2217<sub>(+new) | 2403<sub>(+new) | 2475<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A3.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:27:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2217, 2746, 2820, 2907, 2935, 2911]
  line "STC (8.0+0.08s)" [2217, 2746, 2820, 2907, 2935, 2911]
  line "LTC (60.0+0.60s)" [2403, 2931, 3002, 3101, 3159, 3129]
  line "VLTC (2m24s+1.12s)" [2475, 2954, 3086, 3155, 3179, 3162]
  line "VLTC (2m24s+1.12s)" [2475, 2954, 3086, 3155, 3179, 3162]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 35 | 228 | 52% | 3146 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 42 | 158 | 53% | 3110 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2911 | 41 | 170 | 49% | 2921 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 104 | 24 | 58% | 3116 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3159 | 102 | 24 | 54% | 3123 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2935 | 110 | 24 | 50% | 2938 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 35 | 226 | 49% | 3166 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3101 | 33 | 260 | 52% | 3085 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2907 | 33 | 264 | 50% | 2908 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3086 | 35 | 232 | 51% | 3079 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3002 | 36 | 212 | 52% | 2985 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2820 | 37 | 224 | 48% | 2838 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2954 | 51 | 128 | 57% | 2877 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2931 | 43 | 184 | 59% | 2842 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2746 | 56 | 108 | 53% | 2703 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2475 | 57 | 110 | 48% | 2506 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2403 | 58 | 108 | 48% | 2422 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2217 | 62 | 88 | 51% | 2211 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |