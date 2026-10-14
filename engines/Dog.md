# Engine: Dog

Author: Folkert van Heusden

Home: https://github.com/folkertvanheusden/Dog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2676 | 2988 | 3073 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2909 | 3131 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.10.2 | 2025-12-05 | 2812 | 3044 | 3104 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dog+<version>&body=###%20Engine%20name%0ADog%0A%0A###%20Version%0A4.10.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-14 04:38:03



## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.10.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3073 | 34 | 270 | 56% | 3012 | 46% |
|  |  | T1 | 3104 | 22 | 606 | 53% | 3074 | 55% |
|  |  | P1 | 3189 | 38 | 212 | 57% | 3093 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2988 | 35 | 264 | 51% | 2942 | 42% |
|  |  | T1 | 3044 | 24 | 498 | 52% | 3029 | 54% |
|  |  | P1 | 3131 | 43 | 164 | 54% | 3035 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2676 | 32 | 324 | 46% | 2718 | 32% |
|  |  | T1 | 2812 | 20 | 780 | 49% | 2820 | 40% |
|  |  | P1 | 2909 | 45 | 154 | 51% | 2893 | 36% |