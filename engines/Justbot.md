# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-07-19 | 3029<sub>(+465) | 3262<sub>(+385) | 3283<sub>(+337) |  |
| 0.2.0 | 2026-06-24 | 2564<sub>(+555) | 2877<sub>(+574) | 2946<sub>(+547) |  |
| 0.1.0 | 2026-06-09 | 2009 | 2303 | 2399 |  |
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

Generated: 2026-07-23 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "STC (8.0+0.08s)" [2009, 2564, 3029]
  line "STC (8.0+0.08s)" [2009, 2564, 3029]
  line "LTC (60.0+0.60s)" [2303, 2877, 3262]
  line "VLTC (2m24s+1.12s)" [2399, 2946, 3283]
  line "VLTC (2m24s+1.12s)" [2399, 2946, 3283]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 39 | 172 | 53% | 3259 | 62% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 36 | 200 | 53% | 3237 | 67% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3029 | 35 | 228 | 50% | 3025 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 37 | 212 | 50% | 2935 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2877 | 32 | 296 | 47% | 2896 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2564 | 36 | 252 | 46% | 2603 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 36 | 278 | 49% | 2419 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2303 | 35 | 284 | 49% | 2311 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2009 | 37 | 266 | 48% | 2022 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |