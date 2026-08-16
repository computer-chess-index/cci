# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3276<sub>(+236) | 3432<sub>(+166) | 3499<sub>(+187) |  |
| 0.3.0 | 2026-07-19 | 3040<sub>(+476) | 3266<sub>(+388) | 3312<sub>(+365) |  |
| 0.2.0 | 2026-06-24 | 2564<sub>(+554) | 2878<sub>(+575) | 2947<sub>(+548) |  |
| 0.1.0 | 2026-06-09 | 2010 | 2303 | 2399 |  |
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

Generated: 2026-08-16 06:25:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3500
  line "STC (8.0+0.08s)" [2010, 2564, 3040, 3276]
  line "STC (8.0+0.08s)" [2010, 2564, 3040, 3276]
  line "LTC (60.0+0.60s)" [2303, 2878, 3266, 3432]
  line "VLTC (2m24s+1.12s)" [2399, 2947, 3312, 3499]
  line "VLTC (2m24s+1.12s)" [2399, 2947, 3312, 3499]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 81 | 36 | 56% | 3456 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 66 | 56 | 51% | 3422 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3276 | 59 | 76 | 47% | 3294 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3312 | 28 | 336 | 53% | 3286 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 29 | 296 | 52% | 3248 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3040 | 31 | 292 | 50% | 3038 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 37 | 212 | 50% | 2936 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2878 | 32 | 296 | 47% | 2897 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2564 | 36 | 252 | 46% | 2603 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 36 | 278 | 49% | 2419 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2303 | 35 | 284 | 49% | 2311 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2010 | 37 | 266 | 48% | 2025 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |