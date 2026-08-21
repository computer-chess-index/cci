# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3283<sub>(+237) | 3438<sub>(+166) | 3506<sub>(+188) |  |
| 0.3.0 | 2026-07-19 | 3046<sub>(+477) | 3272<sub>(+388) | 3318<sub>(+366) |  |
| 0.2.0 | 2026-06-24 | 2569<sub>(+553) | 2884<sub>(+575) | 2952<sub>(+548) |  |
| 0.1.0 | 2026-06-09 | 2016 | 2309 | 2404 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:26:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "STC (8.0+0.08s)" [2016, 2569, 3046, 3283]
  line "STC (8.0+0.08s)" [2016, 2569, 3046, 3283]
  line "LTC (60.0+0.60s)" [2309, 2884, 3272, 3438]
  line "VLTC (2m24s+1.12s)" [2404, 2952, 3318, 3506]
  line "VLTC (2m24s+1.12s)" [2404, 2952, 3318, 3506]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 81 | 36 | 56% | 3463 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 66 | 56 | 51% | 3428 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3283 | 59 | 76 | 47% | 3301 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3318 | 28 | 336 | 53% | 3291 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 29 | 296 | 52% | 3255 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3046 | 31 | 308 | 50% | 3043 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2952 | 37 | 212 | 50% | 2942 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 32 | 296 | 47% | 2903 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2569 | 36 | 252 | 46% | 2608 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2404 | 36 | 278 | 49% | 2425 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 35 | 284 | 49% | 2317 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2016 | 37 | 266 | 48% | 2030 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |