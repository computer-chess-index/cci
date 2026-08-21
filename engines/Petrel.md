# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3132<sub>(+117) | 3337<sub>(+148) | 3370<sub>(+106) |  |
| 3.5 | 2026-06-02 | 3015<sub>(+98) | 3189<sub>(+53) | 3264<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2917<sub>(-25) | 3136<sub>(-30) | 3168<sub>(-18) |  |
| 3.3 | 2026-02-09 | 2942<sub>(+30) | 3166<sub>(+58) | 3186<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2912<sub>(+86) | 3108<sub>(+100) | 3162<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2826<sub>(+76) | 3008<sub>(+72) | 3093<sub>(+134) |  |
| 3.0 | 2025-11-26 | 2750<sub>(+533) | 2936<sub>(+534) | 2959<sub>(+484) |  |
| 2.1 | 2025-10-13 | 2217 | 2402 | 2475 |  |
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

Generated: 2026-08-21 06:28:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2217, 2750, 2826, 2912, 2942, 2917, 3015, 3132]
  line "STC (8.0+0.08s)" [2217, 2750, 2826, 2912, 2942, 2917, 3015, 3132]
  line "LTC (60.0+0.60s)" [2402, 2936, 3008, 3108, 3166, 3136, 3189, 3337]
  line "VLTC (2m24s+1.12s)" [2475, 2959, 3093, 3162, 3186, 3168, 3264, 3370]
  line "VLTC (2m24s+1.12s)" [2475, 2959, 3093, 3162, 3186, 3168, 3264, 3370]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 29 | 286 | 51% | 3362 | 73% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 31 | 258 | 51% | 3332 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3132 | 33 | 248 | 49% | 3137 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 27 | 368 | 49% | 3271 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 27 | 364 | 51% | 3177 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3015 | 28 | 364 | 49% | 3021 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 35 | 228 | 52% | 3152 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 42 | 158 | 53% | 3117 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2917 | 41 | 170 | 49% | 2928 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3186 | 104 | 24 | 58% | 3123 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 102 | 24 | 54% | 3129 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2942 | 110 | 24 | 50% | 2946 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 35 | 226 | 49% | 3173 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3108 | 33 | 260 | 52% | 3092 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2912 | 33 | 264 | 50% | 2913 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3093 | 35 | 232 | 51% | 3086 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3008 | 36 | 212 | 52% | 2990 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2826 | 37 | 224 | 48% | 2843 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2959 | 51 | 128 | 57% | 2882 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 43 | 184 | 59% | 2846 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2750 | 56 | 108 | 53% | 2707 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2475 | 57 | 110 | 48% | 2506 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2402 | 58 | 108 | 48% | 2422 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2217 | 62 | 88 | 51% | 2211 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |