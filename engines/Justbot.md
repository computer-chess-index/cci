# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-07-19 | 3042<sub>(+476) | 3264<sub>(+383) | 3313<sub>(+365) |  |
| 0.2.0 | 2026-06-24 | 2566<sub>(+554) | 2881<sub>(+577) | 2948<sub>(+548) |  |
| 0.1.0 | 2026-06-09 | 2012 | 2304 | 2400 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:50:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "STC (8.0+0.08s)" [2012, 2566, 3042]
  line "STC (8.0+0.08s)" [2012, 2566, 3042]
  line "LTC (60.0+0.60s)" [2304, 2881, 3264]
  line "VLTC (2m24s+1.12s)" [2400, 2948, 3313]
  line "VLTC (2m24s+1.12s)" [2400, 2948, 3313]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3313 | 28 | 328 | 53% | 3289 | 66% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3264 | 30 | 288 | 52% | 3249 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3042 | 32 | 288 | 50% | 3039 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2948 | 37 | 212 | 50% | 2938 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 32 | 296 | 47% | 2900 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2566 | 36 | 252 | 46% | 2606 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2400 | 36 | 278 | 49% | 2422 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2304 | 35 | 284 | 49% | 2313 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2012 | 37 | 266 | 48% | 2025 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |