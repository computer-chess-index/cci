# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.0 | 2026-08-11 | 3281<sub>(+239) | 3436<sub>(+166) | 3503<sub>(+187) |  |
| 0.3.0 | 2026-07-19 | 3042<sub>(+474) | 3270<sub>(+388) | 3316<sub>(+365) |  |
| 0.2.0 | 2026-06-24 | 2568<sub>(+554) | 2882<sub>(+575) | 2951<sub>(+548) |  |
| 0.1.0 | 2026-06-09 | 2014 | 2307 | 2403 |  |
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

Generated: 2026-08-18 06:26:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "STC (8.0+0.08s)" [2014, 2568, 3042, 3281]
  line "STC (8.0+0.08s)" [2014, 2568, 3042, 3281]
  line "LTC (60.0+0.60s)" [2307, 2882, 3270, 3436]
  line "VLTC (2m24s+1.12s)" [2403, 2951, 3316, 3503]
  line "VLTC (2m24s+1.12s)" [2403, 2951, 3316, 3503]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 81 | 36 | 56% | 3461 | 78% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 66 | 56 | 51% | 3426 | 73% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 3281 | 59 | 76 | 47% | 3298 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3316 | 28 | 336 | 53% | 3290 | 65% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3270 | 29 | 296 | 52% | 3254 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3042 | 31 | 300 | 50% | 3043 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 37 | 212 | 50% | 2940 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2882 | 32 | 296 | 47% | 2901 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2568 | 36 | 252 | 46% | 2607 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2403 | 36 | 278 | 49% | 2425 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2307 | 35 | 284 | 49% | 2315 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2014 | 37 | 266 | 48% | 2029 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |