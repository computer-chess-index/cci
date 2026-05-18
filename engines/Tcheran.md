# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3325<sub>(+40) | 3472<sub>(+11) | 3507<sub>(+20) |  |
| 11.0 | 2026-02-13 | 3285<sub>(+99) | 3461<sub>(+93) | 3487<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3186<sub>(+117) | 3368<sub>(+129) | 3429<sub>(+139) |  |
| 9.0 | 2025-12-08 | 3069<sub>(+80) | 3239<sub>(+50) | 3290<sub>(+51) |  |
| 8.0 | 2025-11-27 | 2989<sub>(+177) | 3189<sub>(+149) | 3239<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2812<sub>(+new) | 3040<sub>(+new) | 3113<sub>(+new) |  |
| 6.0 | 2025-10-21 |  |  |  |  |
| 5.1 | 2025-01-01 |  |  |  |  |
| 5.0 | 2024-12-05 |  |  |  |  |
| 4.1 | 2024-11-24 |  |  |  |  |
| 4.0 | 2024-10-18 |  |  |  |  |
| 3.0 | 2024-09-09 |  |  |  |  |
| 2.5 | 2024-07-25 |  |  |  |  |
| 2.4 | 2024-07-08 |  |  |  |  |
| 2.3 | 2024-05-09 |  |  |  |  |
| 2.2 | 2024-04-09 |  |  |  |  |
| 2.1 | 2024-01-25 |  |  |  |  |
| 2.0 | 2024-01-18 |  |  |  |  |
| 1.1 | 2024-01-08 |  |  |  |  |
| 1.0 | 2023-12-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A12.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:28:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "STC (8.0+0.08s)" [2812, 2989, 3069, 3186, 3285, 3325]
  line "STC (8.0+0.08s)" [2812, 2989, 3069, 3186, 3285, 3325]
  line "LTC (60.0+0.60s)" [3040, 3189, 3239, 3368, 3461, 3472]
  line "VLTC (2m24s+1.12s)" [3113, 3239, 3290, 3429, 3487, 3507]
  line "VLTC (2m24s+1.12s)" [3113, 3239, 3290, 3429, 3487, 3507]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 28 | 296 | 50% | 3506 | 85% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 28 | 296 | 51% | 3467 | 79% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 27 | 342 | 52% | 3309 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 23 | 434 | 51% | 3483 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 24 | 424 | 51% | 3452 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 25 | 448 | 51% | 3281 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 27 | 336 | 49% | 3437 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 30 | 268 | 49% | 3378 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3186 | 31 | 286 | 52% | 3174 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3290 | 38 | 180 | 50% | 3289 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 39 | 168 | 52% | 3224 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3069 | 37 | 212 | 47% | 3097 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3239 | 44 | 132 | 50% | 3237 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 37 | 204 | 57% | 3133 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2989 | 42 | 164 | 47% | 3012 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 51 | 116 | 47% | 3137 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3040 | 49 | 130 | 50% | 3021 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2812 | 54 | 116 | 56% | 2735 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |