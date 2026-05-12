# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2971<sub>(+new) | 3190<sub>(+new) | 3222<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2994<sub>(+new) | 3220<sub>(+new) | 3241<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2966<sub>(+86) | 3162<sub>(+99) | 3216<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2880<sub>(+75) | 3063<sub>(+73) | 3148<sub>(+133) |  |
| 3.0 | 2025-11-26 | 2805<sub>(+536) | 2990<sub>(+530) | 3015<sub>(+482) |  |
| 2.1 | 2025-10-13 | 2269<sub>(+new) | 2460<sub>(+new) | 2533<sub>(+new) |  |
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

Generated: 2026-05-12 06:27:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2269, 2805, 2880, 2966, 2994, 2971]
  line "STC (8.0+0.08s)" [2269, 2805, 2880, 2966, 2994, 2971]
  line "LTC (60.0+0.60s)" [2460, 2990, 3063, 3162, 3220, 3190]
  line "VLTC (2m24s+1.12s)" [2533, 3015, 3148, 3216, 3241, 3222]
  line "VLTC (2m24s+1.12s)" [2533, 3015, 3148, 3216, 3241, 3222]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3222 | 35 | 228 | 52% | 3206 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 42 | 158 | 53% | 3171 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2971 | 41 | 170 | 49% | 2982 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3241 | 104 | 24 | 58% | 3178 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3220 | 102 | 24 | 54% | 3183 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2994 | 110 | 24 | 50% | 2997 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 35 | 226 | 49% | 3227 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3162 | 33 | 260 | 52% | 3146 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2966 | 33 | 264 | 50% | 2967 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3148 | 35 | 232 | 51% | 3140 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3063 | 36 | 212 | 52% | 3044 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2880 | 37 | 224 | 48% | 2897 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 51 | 128 | 57% | 2936 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 43 | 184 | 59% | 2901 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2805 | 56 | 108 | 53% | 2762 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2533 | 57 | 110 | 48% | 2562 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2460 | 58 | 108 | 48% | 2479 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2269 | 62 | 88 | 51% | 2264 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |