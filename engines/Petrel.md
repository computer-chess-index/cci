# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2969<sub>(+new) | 3187<sub>(+new) | 3218<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2992<sub>(+new) | 3217<sub>(+new) | 3237<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2963<sub>(+86) | 3158<sub>(+99) | 3212<sub>(+68) |  |
| 3.1 | 2025-11-28 | 2877<sub>(+74) | 3059<sub>(+71) | 3144<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2803<sub>(+532) | 2988<sub>(+530) | 3012<sub>(+481) |  |
| 2.1 | 2025-10-13 | 2271<sub>(+new) | 2458<sub>(+new) | 2531<sub>(+new) |  |
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

Generated: 2026-05-18 06:26:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2271, 2803, 2877, 2963, 2992, 2969]
  line "STC (8.0+0.08s)" [2271, 2803, 2877, 2963, 2992, 2969]
  line "LTC (60.0+0.60s)" [2458, 2988, 3059, 3158, 3217, 3187]
  line "VLTC (2m24s+1.12s)" [2531, 3012, 3144, 3212, 3237, 3218]
  line "VLTC (2m24s+1.12s)" [2531, 3012, 3144, 3212, 3237, 3218]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 35 | 228 | 52% | 3202 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3187 | 42 | 158 | 53% | 3168 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2969 | 41 | 170 | 49% | 2979 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3237 | 104 | 24 | 58% | 3174 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3217 | 102 | 24 | 54% | 3179 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2992 | 110 | 24 | 50% | 2994 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3212 | 35 | 226 | 49% | 3224 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3158 | 33 | 260 | 52% | 3143 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2963 | 33 | 264 | 50% | 2965 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3144 | 35 | 232 | 51% | 3137 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3059 | 36 | 212 | 52% | 3042 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2877 | 37 | 224 | 48% | 2894 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 51 | 128 | 57% | 2934 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2988 | 43 | 184 | 59% | 2898 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2803 | 56 | 108 | 53% | 2759 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2531 | 57 | 110 | 48% | 2561 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2458 | 58 | 108 | 48% | 2479 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2271 | 62 | 88 | 51% | 2265 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |