# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2974<sub>(+new) | 3194<sub>(+new) | 3225<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2998<sub>(+new) | 3222<sub>(+new) | 3244<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2970<sub>(+88) | 3164<sub>(+98) | 3218<sub>(+67) |  |
| 3.1 | 2025-11-28 | 2882<sub>(+73) | 3066<sub>(+72) | 3151<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2809<sub>(+537) | 2994<sub>(+532) | 3017<sub>(+482) |  |
| 2.1 | 2025-10-13 | 2272<sub>(+new) | 2462<sub>(+new) | 2535<sub>(+new) |  |
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

Generated: 2026-05-17 06:26:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2272, 2809, 2882, 2970, 2998, 2974]
  line "STC (8.0+0.08s)" [2272, 2809, 2882, 2970, 2998, 2974]
  line "LTC (60.0+0.60s)" [2462, 2994, 3066, 3164, 3222, 3194]
  line "VLTC (2m24s+1.12s)" [2535, 3017, 3151, 3218, 3244, 3225]
  line "VLTC (2m24s+1.12s)" [2535, 3017, 3151, 3218, 3244, 3225]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3225 | 35 | 228 | 52% | 3209 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 42 | 158 | 53% | 3175 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2974 | 41 | 170 | 49% | 2985 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 104 | 24 | 58% | 3181 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 102 | 24 | 54% | 3186 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2998 | 110 | 24 | 50% | 3001 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3218 | 35 | 226 | 49% | 3231 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 33 | 260 | 52% | 3150 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2970 | 33 | 264 | 50% | 2971 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3151 | 35 | 232 | 51% | 3144 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 36 | 212 | 52% | 3048 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2882 | 37 | 224 | 48% | 2901 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 51 | 128 | 57% | 2940 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 43 | 184 | 59% | 2905 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2809 | 56 | 108 | 53% | 2766 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2535 | 57 | 110 | 48% | 2566 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2462 | 58 | 108 | 48% | 2481 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2272 | 62 | 88 | 51% | 2267 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |