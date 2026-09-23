# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-09-08 | 3137<sub>(+5) | 3314<sub>(-22) | 3372<sub>(0) |  |
| 4.0 | 2026-08-04 | 3132<sub>(+107) | 3336<sub>(+139) | 3372<sub>(+98) |  |
| 3.5 | 2026-06-02 | 3025<sub>(+98) | 3197<sub>(+51) | 3274<sub>(+97) |  |
| 3.3.1 | 2026-02-10 | 2927<sub>(-25) | 3146<sub>(-28) | 3177<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2952<sub>(+31) | 3174<sub>(+58) | 3195<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2921<sub>(+86) | 3116<sub>(+97) | 3171<sub>(+70) |  |
| 3.1 | 2025-11-28 | 2835<sub>(+76) | 3019<sub>(+75) | 3101<sub>(+131) |  |
| 3.0 | 2025-11-26 | 2759<sub>(+536) | 2944<sub>(+534) | 2970<sub>(+487) |  |
| 2.1 | 2025-10-13 | 2223 | 2410 | 2483 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-23 04:40:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0", "4.1"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2223, 2759, 2835, 2921, 2952, 2927, 3025, 3132, 3137]
  line "STC (8.0+0.08s)" [2223, 2759, 2835, 2921, 2952, 2927, 3025, 3132, 3137]
  line "LTC (60.0+0.60s)" [2410, 2944, 3019, 3116, 3174, 3146, 3197, 3336, 3314]
  line "" [2483, 2970, 3101, 3171, 3195, 3177, 3274, 3372, 3372]
  line "VLTC (2m24s+1.12s)" [2483, 2970, 3101, 3171, 3195, 3177, 3274, 3372, 3372]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 32 | 232 | 49% | 3382 | 75% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 32 | 244 | 51% | 3306 | 70% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3137 | 31 | 272 | 53% | 3114 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 27 | 338 | 50% | 3372 | 74% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3336 | 28 | 322 | 49% | 3341 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 30 | 308 | 49% | 3140 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 27 | 368 | 49% | 3281 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 27 | 364 | 51% | 3186 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3025 | 28 | 364 | 49% | 3032 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 35 | 228 | 52% | 3160 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 42 | 158 | 53% | 3127 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2927 | 41 | 170 | 49% | 2938 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 104 | 24 | 58% | 3131 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3174 | 102 | 24 | 54% | 3137 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2952 | 110 | 24 | 50% | 2955 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 35 | 226 | 49% | 3182 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 33 | 260 | 52% | 3101 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2921 | 33 | 264 | 50% | 2923 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3101 | 35 | 232 | 51% | 3094 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3019 | 36 | 212 | 52% | 3000 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2835 | 37 | 224 | 48% | 2853 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2970 | 51 | 128 | 57% | 2892 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 43 | 184 | 59% | 2855 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2759 | 56 | 108 | 53% | 2716 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 57 | 110 | 48% | 2514 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 58 | 108 | 48% | 2430 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2223 | 62 | 88 | 51% | 2217 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |